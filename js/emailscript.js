//         SMTP Email JS
          function sendEmail(){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '-' + mm + '-' + yyyy;

            Email.send({
                Host : 'smtp-relay.sendinblue.com',
                Port : '587',
                Username : 'anish.kavil@gmail.com',
                Password : 'ftIrhgDykQFn5PO2',
                To : 'anish.kavil@gmail.com',
                From : document.getElementById("email").value,
                Subject : "Query from julietarakal.github.io  on :"+today,
                Body : "Message : "+document.getElementById("message").value
                +"<br> Phone Number : "+document.getElementById('phone').value
                +"<br> Name : "+document.getElementById('name').value
            }).then(
              message => alert('Message is sent to Juliet Arakal Successfully ')
            );

          }

        </script>
        <script>
        $('#contactForm').submit(function() {
            $.ajax({
                          type: "POST",
                          url: "https://api.sendinblue.com/v3/smtp/email",
                          headers: JSON.stringify({
                            'accept': 'application/json',
                            'api-key': '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',
                            'content-type': 'application/json',
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                            'Access-Control-Allow-Headers': 'Accept,authorization,Authorization, Content-Type'
                                 }),
                          data: JSON.stringify({
                            'sender':{
                                    'name': 'Anish PK',
                                    "email": 'anish.pk@gmail.com'
                                     },
                            'to':[
                                    {
                                     'email': 'anish.kavil@gmail.com',
                                     'name': 'Anish Kavil'
                                    }
                                  ],
                            "subject":"Hello world",
                            "htmlContent":"<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Sendinblue.</p></body></html>",
                          }),
                        }).done(function(response) {
                           console.log(response); // if you're into that sorta thing
                     });
                                            });



        function sendEmail(){
            $.ajax({
                          type: "POST",
                          url: "https://api.sendinblue.com/v3/smtp/email",
                          header:{
                            "accept": "application/json",
                            "api-key": "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",
                            "content-type": "application/json"
                                 },
                          data: {
                            "sender":{
                                    "name":"Anish PK",
                                    "email":"anish.pk@gmail.com"
                                     },
                            "to":[
                                    {
                                     "email":"anish.kavil@gmail.com",
                                     "name":"Anish Kavil"
                                    }
                                  ],
                            "subject":"Hello world",
                            "htmlContent":"<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Sendinblue.</p></body></html>"
                          },
                          success: function( result ) {
                                                            $( "#test" ).html( "<strong>" + result + "</strong>" );
                                                      },
                          failure: function( result ) {
                                                            $( "#test" ).html( "<strong>" + result + "</strong>" );
                                                      }
                        }).done(function(response) {
                           console.log(response); // if you're into that sorta thing
                     });
        } // function send email terminated

