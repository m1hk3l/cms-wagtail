# pages/blocks.py

from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock

TEXT_ALIGNMENT_CHOICES = [
    ('left-top', 'Left Top'),
    ('left-middle', 'Left Middle'),
    ('left-bottom', 'Left Bottom'),
    ('center-top', 'Center Top'),
    ('center-middle', 'Center Middle'),
    ('center-bottom', 'Center Bottom'),
    ('right-top', 'Right Top'),
    ('right-middle', 'Right Middle'),
    ('right-bottom', 'Right Bottom'),
]

class TextImageBlock(blocks.StructBlock):
    text = blocks.RichTextBlock(features=[
    "h1", "h2", "h3", "bold", "italic", "link",
    "left", "center", "right", "justify"
    ])
    image = ImageChooserBlock()
    layout = blocks.ChoiceBlock(choices=[
        ("image_left", "Image Left, Text Right"),
        ("image_right", "Text Left, Image Right"),
    ], default="image_right")
    text_alignment = blocks.ChoiceBlock(
        choices = TEXT_ALIGNMENT_CHOICES,
        default = "left-top",
        required = False,
        help_text="Position the text relative to the image"
    )

    class Meta:
        template = "blocks/text_image_block.html"
        icon = "image"
        label = "Text + Image"

class IllustrativeImageBlock(blocks.StructBlock):
    image = ImageChooserBlock()
    
    class Meta:
        template = "blocks/full_width_image_block.html"
        icon = "image"
        label = "Image"
        
class StudioActivityCard(blocks.StructBlock):
    title = blocks.CharBlock(required=False)
    description = blocks.TextBlock(required=False)
    image = ImageChooserBlock(required=True)
    link = blocks.PageChooserBlock(required=False)

    class Meta:
        icon = "doc-full"
        label = "Studio Activity"

class StudioActivitiesBlock(blocks.StructBlock):
    heading = blocks.CharBlock(required=False, default="Mida saab akvarellistuudios teha?")
    cards = blocks.ListBlock(StudioActivityCard())

    class Meta:
        template = "blocks/studio_activities_block.html"
        icon = "placeholder"
        label = "Studio Activities"