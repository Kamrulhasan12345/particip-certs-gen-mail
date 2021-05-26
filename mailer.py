import smtplib
import pandas as pd
import os

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

df = pd.read_csv(os.env(CSV_EMAIL))


sender = "mohammadkh@cburst.ml"
password = "f2d744cf4a5f86c7f627f11d7bf7c77d-1553bd45-d4b3234a" # Your SMTP password for Gmail
smtp_server = smtplib.SMTP_SSL("smtp.mailgun.org", 465)
smtp_server.login(sender, password)

def mailer(b, n):
  body = '''Hello,
  This is the body of the email
  sicerely yours
  G.G.
  '''
  # https://dbader.org/blog/python-send-email
  
  receipient = df.email[n]
  
  subject = "Test email from Python"
  text = "Hello from Python"
  message = MIMEMultipart()
  message['From'] = sender
  message['To'] = receipient
  message['Subject'] = 'This email has an attacment, a pdf file'
  
  message.attach(MIMEText(body, 'plain'))

  payload = MIMEBase('application', 'octate-stream', Name="PDF.pdf")
  payload.set_payload(b)

  encoders.encode_base64(payload)

# add header with pdf name
  payload.add_header('Content-Decomposition', 'attachment', filename="PDF.pdf")
  message.attach(payload)
  text = message.as_string()
  smtp_server.sendmail(sender, receipient, text)
  print(n)