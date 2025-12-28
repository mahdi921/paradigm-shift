import json
from datetime import datetime
from pathlib import Path

from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .data import BUSINESS_CATEGORIES, get_all_businesses, get_business_by_id, get_category_by_id


@api_view(['GET'])
def categories_list(request):
    """List all business categories."""
    categories = [
        {
            'id': cat['id'],
            'name': cat['name'],
            'name_en': cat['name_en'],
            'icon': cat['icon'],
            'business_count': len(cat['businesses'])
        }
        for cat in BUSINESS_CATEGORIES
    ]
    return Response(categories)


@api_view(['GET'])
def category_detail(request, category_id):
    """Get a specific category with its businesses."""
    category = get_category_by_id(category_id)
    if category is None:
        return Response(
            {'error': 'Category not found'},
            status=status.HTTP_404_NOT_FOUND
        )
    return Response(category)


@api_view(['GET'])
def businesses_list(request):
    """List all businesses (flat list)."""
    businesses = get_all_businesses()
    return Response(businesses)


@api_view(['GET'])
def business_detail(request, business_id):
    """Get a specific business by ID."""
    business = get_business_by_id(business_id)
    if business is None:
        return Response(
            {'error': 'Business not found'},
            status=status.HTTP_404_NOT_FOUND
        )
    return Response(business)


@api_view(['POST'])
def contact_submit(request):
    """Submit contact form and save to JSON file."""
    required_fields = ['name', 'business_type', 'contact']
    
    # Validate required fields
    for field in required_fields:
        if field not in request.data or not request.data[field]:
            return Response(
                {'error': f'Field "{field}" is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
    
    # Prepare contact data
    contact_data = {
        'id': datetime.now().strftime('%Y%m%d%H%M%S%f'),
        'name': request.data['name'],
        'business_type': request.data['business_type'],
        'problem': request.data.get('problem', ''),
        'contact': request.data['contact'],
        'submitted_at': datetime.now().isoformat(),
    }
    
    # Ensure data directory exists
    data_dir = settings.DATA_DIR
    data_dir.mkdir(exist_ok=True)
    
    # Load existing contacts or create empty list
    contacts_file = data_dir / 'contacts.json'
    if contacts_file.exists():
        with open(contacts_file, 'r', encoding='utf-8') as f:
            contacts = json.load(f)
    else:
        contacts = []
    
    # Add new contact
    contacts.append(contact_data)
    
    # Save to file
    with open(contacts_file, 'w', encoding='utf-8') as f:
        json.dump(contacts, f, ensure_ascii=False, indent=2)
    
    return Response({
        'success': True,
        'message': 'اطلاعات شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.'
    }, status=status.HTTP_201_CREATED)
