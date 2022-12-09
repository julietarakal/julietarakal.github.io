#! /bin/sh
echo 'This email will send an email using sendinblue.com'
curl --request POST \
  --url https://api.sendinblue.com/v3/smtp/email \
  --header 'accept: application/json' \
  --header 'api-key: <enter key here from site>' \
  --header 'content-type: application/json' \
  --data '{  
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
}'
