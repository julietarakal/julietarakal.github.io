#! /bin/sh
echo 'This email will send an email using sendinblue.com'
curl --request POST \
  --url https://api.sendinblue.com/v3/smtp/email \
  --header 'accept: application/json' \
  --header 'api-key: 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' \
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
