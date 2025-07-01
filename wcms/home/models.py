from django.db import models
from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.admin.panels import FieldPanel
from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from pages.blocks import StudioActivitiesBlock
from pages.models import FlexibleContentPage

class HomePage(Page):
    parent_page_types = ['wagtailcore.Page']
    subpage_types = ['pages.FlexibleContentPage']
    body = StreamField([
        ('text_block', blocks.RichTextBlock(features=['h1', 'h2', 'h3', 'bold', 'italic', 'link'])),
        ('image_block', ImageChooserBlock()),
        ('image_text_block', blocks.StructBlock([
            ('image', ImageChooserBlock(required=True)),
            ('text', blocks.RichTextBlock(required=False)),
        ])),
        ('studio_activities', StudioActivitiesBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]
    