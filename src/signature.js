import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class SignaturePlugin extends Plugin {
  init() {
    const editor = this.editor;

    // Thêm command để chèn chữ ký.
    editor.commands.add('insertSignature', {
      execute() {
        editor.model.change((writer) => {
          const signatureText = writer.createText('Đây là chữ ký của tôi');
          const signatureElement = writer.createElement('signature');
          writer.append(signatureText, signatureElement);
          editor.model.insertContent(signatureElement);
        });
      },
    });

    // Thêm nút vào thanh công cụ.
    editor.ui.componentFactory.add('signature', (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Chèn chữ ký',
        icon: '<svg>...</svg>',
        tooltip: true,
      });

      // Bind command với view.
      view.bind('isEnabled').to(editor.editing.view.document, 'hasSelection');
      view.on('execute', () => editor.execute('insertSignature'));

      return view;
    });
  }
}
