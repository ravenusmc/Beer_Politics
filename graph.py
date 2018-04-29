#This file will handle the making of all of the graphs for the web app. 

#Importing libraries for use in this file
from bokeh.charts import Bar, Scatter, output_file, show
from bokeh.io import output_file, show
from bokeh.plotting import ColumnDataSource, figure, output_file, show
from bokeh.models import CategoricalColorMapper, HoverTool
import csv
import matplotlib.pyplot as plt
import numpy as np
from nvd3 import scatterChart
import pandas as pd

class Graph():

    # def __init__(self):
    #     self.data = pd.read_csv('./data/beer_politics.csv')

    def build_clinton_to_breweries_graph(self):
        #Creating the file where the html will be built to
        output_file('clinton_breweries.html')
        #loading the csv to the file 
        file = './data/beer_politics.csv'
        #Reading and then storing the csv file as a variable 
        data = pd.read_csv(file)
        #Turning the data into a columndatasource
        clinton_breweries = ColumnDataSource(data)

        plot =  figure(x_axis_label='Percentage who voted for clinton', y_axis_label='Number of breweries',
            plot_width=600, plot_height=500, tools='pan,wheel_zoom,box_zoom,reset,hover,save',
            title='number of breweries versus support for Clinton')

        plot.circle(x='clinton_per', y='breweries', source=clinton_breweries,
            size=15)

        show(plot)

test = Graph()
test.build_clinton_to_breweries_graph()










































