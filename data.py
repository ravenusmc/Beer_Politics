#This file will handle all of the data for the project

#Bringing in the files that I need:
# from bokeh.charts import Scatter, output_file, show
# from bokeh.plotting import figure, output_file, show
import csv
import geopandas as gpd
import matplotlib.pyplot as plt
import numpy as np
from nvd3 import scatterChart
import pandas as pd

class Data():

    def __init__(self):
        self.election_data = pd.read_csv('./data/election_data.csv')
        self.breweries = pd.read_csv('./data/breweries.csv')

    



out = df1.append(df2)
print(out)

   ID  User
0  A1    Fi
1  A2    Ki
0  A4  Fsdi
1  A5  Kisd

with open('C:/JIRA Excel File/result.csv', 'w', encoding='utf-8') as f:
    out.to_csv(f, index=False)

https://stackoverflow.com/questions/46069709/combining-two-csv-files-using-pandas