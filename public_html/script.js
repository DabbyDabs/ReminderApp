$(function () {

    let inp_reminder = $('#reminder')
    let inp_name = $('#name')
    let inp_submit = $('#submit')
    let inp_table = $('#Reminders')

    function refreshTable(reminders) {
        inp_table.empty();
        inp_table.append(
            ` <tr>
        <th>Reminder</th>
        <th>Name</th>
    </tr>`
        )
        for (reminder of reminders) {
       inp_table.append(
           `<tr>
           <td>${reminder.reminder}</td>
           <td>${reminder.name}</td>
           </tr>`
       )

        }
    }

    $.get('/api/reminders', function(data){
        refreshTable(data);
    })

    inp_submit.click(function () {
       //  console.log("kuch to hua hai")

       $.post('/api/reminders',{
          reminder: inp_reminder.val(),
          name: inp_name.val()
       },

       function(data){
           refreshTable(data);
       }
       )


    })





})