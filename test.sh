#!/bin/bash
flake8 manage.py budgeting_tool
pylint manage.py budgeting_tool
python manage.py test

npm run lint
npm run test:unit
npm run test:e2e
