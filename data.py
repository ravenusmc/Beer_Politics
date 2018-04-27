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

    def get_breweries_by_state(self):
        #This list will be used to get all the breweries by state.
        states = ['AL','AK', 'AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY',
        'LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
        'OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
        for state in states:
            state_info = self.breweries.loc[self.breweries['state'] == state]
            print(state_info)
            input()

    

obj = Data()
obj.get_breweries_by_state()


    



# out = df1.append(df2)
# print(out)

#    ID  User
# 0  A1    Fi
# 1  A2    Ki
# 0  A4  Fsdi
# 1  A5  Kisd

# with open('C:/JIRA Excel File/result.csv', 'w', encoding='utf-8') as f:
#     out.to_csv(f, index=False)

# https://stackoverflow.com/questions/46069709/combining-two-csv-files-using-pandas

