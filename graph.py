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

        #This line will be what sets up a color code between which states voted for clinton or trump.
        color_mapper = CategoricalColorMapper(factors=['Trump', 'Clinton'],
            palette=['red', 'blue']) 

        plot = figure(x_axis_label='Percentage who voted for Clinton', y_axis_label='Number of Breweries',
            plot_width=600, plot_height=500, tools='pan,wheel_zoom,box_zoom,reset,hover,save',
            title='Number of Breweries versus Support for Clinton')

        plot.circle(x='clinton_per', y='breweries', source=clinton_breweries,
            size=15, color=dict(field='who_won', transform=color_mapper))

        #setting up the hover tools
        hover = plot.select_one(HoverTool)
        hover.tooltips = [('state', '@state'),
        ('Number of Breweries', '@breweries'),
        ('Percentage Voted Clinton', '@clinton_per'),
        ('Percentage Voted Trump', '@trump_per')]

        show(plot)

    def build_graph_based_on_google_data(self):
        #Creating the file where the html will be built to
        output_file('google_breweries.html')
        #loading the csv to the file 
        file = './data/google_beer.csv'
        #Reading and then storing the csv file as a variable 
        data = pd.read_csv(file)
        #Turning the data into a columndatasource
        google_breweries = ColumnDataSource(data)

        #This line will be what sets up a color code between which states voted for clinton or trump.
        color_mapper = CategoricalColorMapper(factors=['Trump', 'Clinton'],
            palette=['red', 'blue']) 
        # color_mapper = CategoricalColorMapper(factors=['plains', 'atlantic','north east', 'west', 'south', 'rust', 'midwest'],
        #     palette=['red', 'blue', 'black', 'orange', 'green', 'yellow', 'purple']) 

        plot = figure(x_axis_label='Percentage who voted for Clinton', y_axis_label='Google Trends Percentage of Searching for Craft Brewery',
        plot_width=600, plot_height=500, tools='pan,wheel_zoom,box_zoom,reset,hover,save',
        title='Google Percentage (All years) versus Support for Clinton')

        plot.circle(x='clinton_per', y='craft_beer_search', source=google_breweries,
            size=15, color=dict(field='who_won', transform=color_mapper))

        # plot.circle(x='clinton_per', y='craft_beer_search', source=google_breweries,
        #     size=15, color=dict(field='region', transform=color_mapper))

        #setting up the hover tools
        hover = plot.select_one(HoverTool)
        hover.tooltips = [('state', '@state'),
        ('Google Percentage', '@craft_beer_search'),
        ('Percentage Voted Clinton', '@clinton_per'),
        ('Percentage Voted Trump', '@trump_per')]

        show(plot)

    #What will make this method different from the one above it is that it pulls on Google
    #trends data during the 2016 Election cycle. Essentially from June 2015 to November 2016
    def build_graph_google_election_date(self):
        #Creating the file where the html will be built to
        output_file('google_breweries_election.html')
        #loading the csv to the file 
        file = './data/google_beer_election.csv'
        #Reading and then storing the csv file as a variable 
        data = pd.read_csv(file)
        #Turning the data into a columndatasource
        google_breweries = ColumnDataSource(data)

        #This line will be what sets up a color code between which states voted for clinton or trump.
        # color_mapper = CategoricalColorMapper(factors=['Trump', 'Clinton'],
        #     palette=['red', 'blue']) 
        
        #Region color_mapper
        color_mapper = CategoricalColorMapper(factors=['plains', 'atlantic','north east', 'west', 'south', 'rust', 'midwest'],
            palette=['red', 'blue', 'black', 'orange', 'green', 'yellow', 'purple']) 

        plot = figure(x_axis_label='Percentage who voted for Clinton', y_axis_label='Google Trends Percentage of Searching for Craft Brewery',
        plot_width=600, plot_height=500, tools='pan,wheel_zoom,box_zoom,reset,hover,save',
        title='Google Percentage (Election) versus Support for Clinton')

        # plot.circle(x='clinton_per', y='craft_beer_search', source=google_breweries,
        # size=15, color=dict(field='who_won', transform=color_mapper))

        #Region plot.cirlce code
        plot.circle(x='clinton_per', y='craft_beer_search', source=google_breweries,
            size=15, color=dict(field='region', transform=color_mapper))

        #setting up the hover tools
        hover = plot.select_one(HoverTool)
        hover.tooltips = [('state', '@state'),
        ('Google Percentage', '@craft_beer_search'),
        ('Percentage Voted Clinton', '@clinton_per'),
        ('Percentage Voted Trump', '@trump_per')]

        show(plot)


test = Graph()
#test.build_clinton_to_breweries_graph()
test.build_graph_based_on_google_data()
#test.build_graph_google_election_date()










































