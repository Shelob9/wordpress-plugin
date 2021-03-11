
import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls,useBlockProps } from "@wordpress/block-editor";

let attributes = {
    content: {
        type: 'string',
        required: true,
        default: ''
    },
    className: {
        type: 'string',
        required: false,
        default: ''
    },
}

const Render = ({ attributes, blockProps }) => {
    const blockProps = useBlockProps({
        className: attributes.className ? attributes.attributes : '',
    });
    return (<p {...blockProps}> { attributes.content}</p>);
}

const Edit = ({ attributes, setAttributes }) => {
    return (
        <div>
            <InspectorControls>
                Settings
            </InspectorControls>
            <div>
                <Render
                    attributes={attributes}
                />
            </div>
        </div>
    )
}
registerBlockType( 'wordpress-plugin/block', {
    title: 'PLUGIN_NAME',
    apiVersion: 2,
    description: 'Hi Roy',
    category: 'widgets',
    icon: 'smiley',
    supports: {
        html: false,
    },
    attributes,
    edit: Edit,
    save: ({attributes}) => <Render attributes={attributes} />,
} );