$(()=>{
    let btnadd = $('#btnadd')
    let btndelete = $('#btndelete')
    let btnreset = $('#btnreset')
    let btnsort = $('#btnsort')
    let inptask = $('#inptask')
    let inpdatetime = $('#inpdatetime')

    function addItems(){
        if(inpdatetime.val()==''){
            let item  = $('<li>',{
                'class':'list-group-item bg-transparent border-0',
                text: inptask.val(),
                style: 'font-weight:bold;font-size:large'
            })
            $('#ultasks').append(item)
            inptask.val('')
            inpdatetime.val('')
        }
        else{
            let x = inpdatetime.val()
            let date = x.substring(0,x.indexOf('T'))
            let time = x.substring(x.indexOf('T')+1, x.length)
            let item  = $('<li>',{
                'class':'list-group-item bg-transparent border-0',
                text: inptask.val() + " on " + date + " at " + time,
                style: 'font-weight:bold;font-size:large'
            })
            $('#ultasks').append(item)
            inptask.val('')
            inpdatetime.val('')
        }
    }

    btnadd.click(()=>{
        if(inptask.val()!=''){
            addItems();
        }
        else{
            alert('Enter the task first!')
        }
    })

    function clear(){
        inptask.val('')
    }

    btnreset.click(()=>{
        if(inptask.val()==''){
            alert('The input box is already clear!!')
        }
        else{
            clear()
        }
    })

    inptask.keypress((e)=>{
        if(inptask.val()!='' && e.keyCode==13){
            addItems()
        }
        else if(e.keyCode==13 && inptask.val()==''){
            alert('Enter the task first!!')
        }
    })

    $('#ultasks').click((e)=>{
        $(e.target).toggleClass('toggle')
        $(e.target).css('content',$(e.target).text() + '(done)')
    })

    btndelete.click(()=>{
        if($('li').length==0){
            alert('First add certain items!!')
        }
        else{
            $('li').remove()
        }
    })

    btnsort.click(()=>{
        if($('li').length==0){
            alert('First add certain items!!')
        }
        else{
            $('.toggle').appendTo('#ultasks')
        }
    })

    inpdatetime.keypress((e)=>{
        if(e.keyCode==13){
            if(inptask.val()==''){
                alert('Enter the task first!!!')
            }
            else{
                addItems();
            }
        }
    })
})