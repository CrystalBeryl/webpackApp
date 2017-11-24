let FilePlug = React.createClass({
    fileUpload(){
        let form = new FormData();
        form.append('file',this.fileInput.files[0]);
        $.ajax({
            url: '/bugForm/file/upload',
            type: 'POST',
            data: form,
            cache: false,
            contentType: false,
            processData: false,
            success: (res)=>{
                alert(res.data.msg);
            },
            error: (res)=>{
               alert(res.data.msg);
            }
        });



    },


    render(){
        return (

            <div>
                <input type="file" name="files" id="files" onChange={this.fileUpload} ref={(input) => this.fileInput = input}/>

            </div>
        );
    }
});
export {FilePlug};