# Contributing

To get a copy for local development up and running follow these simple example steps.


## Prerequisites

- yarn
- poetry
- docker

## Installation

Start by cloning the repository

```
git clone git@github.com:RuiFilipeCampos/monty-mvp.git
cd monty-mvp
```

### Client Side Code

1. Install client side packages

```
cd client
yarn
```

2. Start the development server

```
yarn dev
```

This will get the frontend up and running on port localhost:8000 and on port 8000 of your local network. 

### Server Side Code

1. Setup poetry

```
cd server
poetry shell
```

2. Install server code dependencies

```
poetry install
```

3. Run the development server

```
python manage.py runserver 8000
```
