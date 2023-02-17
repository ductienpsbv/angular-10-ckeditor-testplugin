import { Component, VERSION } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import LineHeight from 'ckeditor5-line-height';
import SignaturePlugin from '../signature';
console.log('abc');
ClassicEditor.create(document.querySelector('#editor'), {
  plugins: [
    LineHeight, // add it to your plugins array
  ],
  lineHeight: {
    // specify your otions in the lineHeight config object. Default values are [ 0, 0.5, 1, 1.5, 2 ]
    options: [0.5, 1, 1.5, 2, 2.5],
  },
  toolbar: [
    'bold',
    'lineHeight', // add the button to your toolbar
  ],
})
  .then((editor) => {
    console.log('Editor was initialized', editor);
  })
  .catch((error) => {
    console.error(error.stack);
  });
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  editor = ClassicEditor;
  //LineHeight = LineHeight;
  content = `<div contenteditable="true">
                     // Nội dung văn bản
                     <div>
                       <hr style="margin: 0;">
                       <p>Chữ ký của bạn</p>
                     </div>
                   </div>`;

  public onChange({ editor }: any) {
    this.content = editor.getData();
  }
  data: any = `<div style="max-width: 905px;">
  <p><b>Kính gửi Anh/Chị,</b></p>
  <p>Phương án đã được chuyển tiếp về luồng xử lý thủ công.</p>
  <p>File Id:.</p>
  <p>Lý do: </p>
  <p>Thời gian chuyển tiếp: </p>
  <p>Trong quá trình xử lý, nếu có vướng mắc anh/chị vui lòng liên hệ bộ phận IT để được hỗ trợ.</p>
</div>
<div>
  <p>-------------------------------------------------BPM TEAM-------------------------------------------------</p>
  <p style="color:red">ĐÂY LÀ EMAIL CẢNH BÁO. VUI LÒNG KHÔNG TRẢ LỜI EMAIL NÀY!!!</p>
</div>

`;
}
