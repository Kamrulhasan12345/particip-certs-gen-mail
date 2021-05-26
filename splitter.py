import os
import sys
import PyPDF2

from io import BytesIO
from mailer import mailer

def split(pB):
  print(pB)
  pTS = PyPDF2.PdfFileReader(pB)
  if pTS.flattenedPages is None:
    pTS._flatten()
  
  for n, pO in enumerate(pTS.flattenedPages): 
    sP = PyPDF2.PdfFileWriter()
    sP.addPage(pO)
    b = BytesIO()
    sP.write(b)
    mailer(b.getvalue(), n)

with open('index.pdf', 'rb') as file:
  split(file)