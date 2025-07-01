from wagtail import hooks
from wagtail.admin.rich_text.editors.draftail.features import InlineStyleFeature

@hooks.register('register_rich_text_features')
def register_alignment_styles(features):
    for align in ['left', 'center', 'right', 'justify']:
        style_name = f'TEXT_ALIGN_{align.upper()}'
        features.register_editor_plugin(
            'draftail',
            align,
            InlineStyleFeature({
                'type': style_name,
                'style': {'textAlign': align},
                'label': align[0].upper(),
                'description': f'Text align {align}',
            })
        )
        features.register_converter_rule('contentstate', align, {
            'from_database_format': {
                f'span[style*="text-align: {align}"]': style_name,
            },
            'to_database_format': {
                style_name: {
                    'element': 'span',
                    'props': {'style': f'text-align: {align}; display: block;'}
                }
            }
        })
        features.default_features.append(align)
