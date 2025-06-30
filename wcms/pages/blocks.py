# pages/blocks.py

from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock

class TextImageBlock(blocks.StructBlock):
    text = blocks.RichTextBlock(features=["bold", "italic", "link"])
    image = ImageChooserBlock()
    layout = blocks.ChoiceBlock(choices=[
        ("image_left", "Image Left, Text Right"),
        ("image_right", "Text Left, Image Right"),
    ], default="image_right")

    class Meta:
        template = "blocks/text_image_block.html"
        icon = "image"
        label = "Text + Image"
