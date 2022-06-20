FROM ghcr.io/ruifilipecampos/montycarlo:develop


COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY generate_mats.py generate_mats.py
RUN python generate_mats.py


RUN apt install -y libgl1-mesa-glx xvfb
EXPOSE 8000
COPY server server
CMD [ "python", "server/manage.py", "runserver", "0.0.0.0:8000" ]