from wagtail.fields import StreamField
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from .blocks import TextImageBlock
from .blocks import StudioActivitiesBlock

class FlexibleContentPage(Page):
    parent_page_types = ['home.HomePage', 'wagtailcore.Page']
    body = StreamField([
        ('text_block', blocks.RichTextBlock(features=[
        'h1', 'h2', 'h3', 'bold', 'italic', 'link',
        'left', 'center', 'right', 'justify'
        ])),
        ('image_block', ImageChooserBlock()),
        ('image_text_block', TextImageBlock()),
        ('studio_activities', StudioActivitiesBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]
    
class BlockPage(Page):
    body = StreamField([
        ("text_image", TextImageBlock()),
    ], use_json_field=True)

    content_panels = Page.content_panels + [
        FieldPanel("body"),
    ]
