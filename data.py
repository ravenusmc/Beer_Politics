#This file will handle all of the data for the project

#Bringing in the files that I need:
# from bokeh.charts import Scatter, output_file, show
# from bokeh.plotting import figure, output_file, show
import csv
from csv import writer
import geopandas as gpd
import matplotlib.pyplot as plt
import numpy as np
from nvd3 import scatterChart
import pandas as pd


#The code in this file will work with all of the data in this project. Originally, I was not 
#planning on building a new csv file but that's what I ended up doing with the get_breweries_by_state
#method. 
class Data():

    def __init__(self):
        self.election_data = pd.read_csv('./data/election_data.csv')
        self.breweries = pd.read_csv('./data/breweries.csv')
        self.google = pd.read_csv('./data/geoMap.csv')
        self.google_election = pd.read_csv('./data/trends_2_year.csv')
        self.hypothesis_one = pd.read_csv('./data/beer_politics.csv')
        #hypothesis two_A deals with google search for all years. 
        self.hypothesis_two_a = pd.read_csv('./data/google_beer.csv')
        #hypothesis two_B deals with google search for only the election campaign
        self.hypothesis_two_b = pd.read_csv('./data/google_beer_election.csv')

    def get_breweries_by_state(self):
        #This list will be used to get all the breweries by state.
        states = [' AL',' AK', ' AZ',' AR',' CA',' CO',' CT',' DE',' FL',' GA',' HI',' ID',' IL',
        ' IN',' IA',' KS',' KY',' LA',' ME',' MD',' MA',' MI',' MN',' MS',' MO',' MT',' NE',' NV',
        ' NH',' NJ',' NM',' NY',' NC',' ND',' OH',' OK',' OR',' PA',' RI',' SC',' SD',' TN',
        ' TX',' UT',' VT',' VA',' WA',' WV',' WI',' WY']
        #The full state names will be used to build my new CSV file. 
        states_full = ['ALABAMA','ALASKA','ARIZONA','ARKANSAS','CALIFORNIA','COLORADO','CONNECTICUT','DELAWARE',
        'FLORIDA','GEORGIA','HAWAII','IDAHO','ILLINOIS','INDIANA','IOWA','KANSAS','KENTUCKY',
        'LOUISIANA','MAINE','MARYLAND','MASSACHUSETTS','MICHIGAN','MINNESOTA','MISSISSIPPI',
        'MISSOURI','MONTANA','NEBRASKA','NEVADA','NEW HAMPSHIRE','NEW JERSEY',
        'NEW MEXICO','NEW YORK','NORTH CAROLINA','NORTH DAKOTA','OHIO','OKLAHOMA',
        'OREGON','PENNSYLVANIA','RHODE ISLAND','SOUTH CAROLINA','SOUTH DAKOTA','TENNESSEE',
        'TEXAS','UTAH','VERMONT','VIRGINIA','WASHINGTON','WEST VIRGINIA','WISCONSIN',
        'WYOMING']
        with open("./data/beer_politics.csv", "w") as csv_file:
            csv_writer = writer(csv_file)
            csv_writer.writerow(["state", "breweries", "clinton_per", "trump_per", "who_won"])
            count = 0
            while count < len(states):
                #Getting the value for the state column
                full_state = states_full[count]
                #Making the state word all lowercase
                lower_state = full_state.lower()
                # #capitalizing the first letter
                state = lower_state.title()
                #Getting the values for the breweries column
                #The sole states variable is a DF that only has data for each state. 
                sole_states = self.breweries[self.breweries['state'] == states[count]] 
                breweries = sole_states['state'].count()
                #Getting the Clinton percentage of the state 
                clinton_small_df = self.election_data.iloc[count]
                clinton_per = clinton_small_df.iloc[2]
                #Getting the Trump percentage of the state 
                trump_small_df = self.election_data.iloc[count]
                trump_per = trump_small_df.iloc[1]
                #Getting who won each state. 
                if clinton_per > trump_per:
                    who_won = 'Clinton'
                else:
                    who_won = 'Trump'
                #adding the values to the csv file 
                csv_writer.writerow([state, breweries, clinton_per, trump_per, who_won])
                #increasing the count by one
                count += 1 

    def build_csv_google_data(self):
        #This list will be used to get the data by state
        states = ['ALABAMA','ALASKA','ARIZONA','ARKANSAS','CALIFORNIA','COLORADO','CONNECTICUT','DELAWARE',
        'FLORIDA','GEORGIA','HAWAII','IDAHO','ILLINOIS','INDIANA','IOWA','KANSAS','KENTUCKY',
        'LOUISIANA','MAINE','MARYLAND','MASSACHUSETTS','MICHIGAN','MINNESOTA','MISSISSIPPI',
        'MISSOURI','MONTANA','NEBRASKA','NEVADA','NEW HAMPSHIRE','NEW JERSEY',
        'NEW MEXICO','NEW YORK','NORTH CAROLINA','NORTH DAKOTA','OHIO','OKLAHOMA',
        'OREGON','PENNSYLVANIA','RHODE ISLAND','SOUTH CAROLINA','SOUTH DAKOTA','TENNESSEE',
        'TEXAS','UTAH','VERMONT','VIRGINIA','WASHINGTON','WEST VIRGINIA','WISCONSIN',
        'WYOMING']
        #Creating the csv file 
        with open("./data/google_beer.csv", "w") as csv_file:
            csv_writer = writer(csv_file)
            csv_writer.writerow(["state", "craft_beer_search", "clinton_per", "trump_per", "who_won"])
            count = 0
            while count < len(states):
                #Getting the value for the state column
                full_state = states[count]
                #Making the state word all lowercase
                lower_state = full_state.lower()
                #capitalizing the first letter
                state = lower_state.title()

                #Getting the google data 
                df = self.google[self.google.Region == state]
                craft_beer_search = df.iloc[0][1]

                #Getting the Clinton percentage of the state 
                clinton_small_df = self.election_data.iloc[count]
                clinton_per = clinton_small_df.iloc[2]
                #Getting the Trump percentage of the state 
                trump_small_df = self.election_data.iloc[count]
                trump_per = trump_small_df.iloc[1]
                #Getting who won each state. 
                if clinton_per > trump_per:
                    who_won = 'Clinton'
                else:
                    who_won = 'Trump'
                #adding the values to the csv file 
                csv_writer.writerow([state, craft_beer_search, clinton_per, trump_per, who_won])
                #increasing the count by one
                count += 1 

    #What will make this method different from the one above it is that it pulls on Google
    #trends data during the 2016 Election cycle. Essentially from June 2015 to November 2016
    def build_csv_google_data_election(self):
        #This list will be used to get the data by state
        states = ['ALABAMA','ALASKA','ARIZONA','ARKANSAS','CALIFORNIA','COLORADO','CONNECTICUT','DELAWARE',
        'FLORIDA','GEORGIA','HAWAII','IDAHO','ILLINOIS','INDIANA','IOWA','KANSAS','KENTUCKY',
        'LOUISIANA','MAINE','MARYLAND','MASSACHUSETTS','MICHIGAN','MINNESOTA','MISSISSIPPI',
        'MISSOURI','MONTANA','NEBRASKA','NEVADA','NEW HAMPSHIRE','NEW JERSEY',
        'NEW MEXICO','NEW YORK','NORTH CAROLINA','NORTH DAKOTA','OHIO','OKLAHOMA',
        'OREGON','PENNSYLVANIA','RHODE ISLAND','SOUTH CAROLINA','SOUTH DAKOTA','TENNESSEE',
        'TEXAS','UTAH','VERMONT','VIRGINIA','WASHINGTON','WEST VIRGINIA','WISCONSIN',
        'WYOMING']
        #Creating the csv file 
        with open("./data/google_beer_election.csv", "w") as csv_file:
            csv_writer = writer(csv_file)
            csv_writer.writerow(["state", "craft_beer_search", "clinton_per", "trump_per", "who_won"])
            count = 0
            while count < len(states):
                #Getting the value for the state column
                full_state = states[count]
                #Making the state word all lowercase
                lower_state = full_state.lower()
                #capitalizing the first letter
                state = lower_state.title()

                #Getting the google data 
                df = self.google_election[self.google_election.Region == state]
                craft_beer_search = df.iloc[0][1]

                #Getting the Clinton percentage of the state 
                clinton_small_df = self.election_data.iloc[count]
                clinton_per = clinton_small_df.iloc[2]
                #Getting the Trump percentage of the state 
                trump_small_df = self.election_data.iloc[count]
                trump_per = trump_small_df.iloc[1]
                #Getting who won each state. 
                if clinton_per > trump_per:
                    who_won = 'Clinton'
                else:
                    who_won = 'Trump'
                #adding the values to the csv file 
                csv_writer.writerow([state, craft_beer_search, clinton_per, trump_per, who_won])
                #increasing the count by one
                count += 1 

    def get_correlations(self):
        #Correlations for hypothesis one
        clinton_correlation = self.hypothesis_one['breweries'].corr(self.hypothesis_one['clinton_per'])
        trump_correlation = self.hypothesis_one['breweries'].corr(self.hypothesis_one['trump_per'])
        #Getting the correlations for hypothesis two A
        clinton_correlation_two_a = self.hypothesis_two_a['craft_beer_search'].corr(self.hypothesis_two_a['clinton_per'])
        trump_correlation_two_a = self.hypothesis_two_a['craft_beer_search'].corr(self.hypothesis_two_a['trump_per'])
        #Getting the correlations for hypothesis two B
        clinton_correlation_two_b = self.hypothesis_two_b['craft_beer_search'].corr(self.hypothesis_two_b['clinton_per'])
        trump_correlation_two_b = self.hypothesis_two_b['craft_beer_search'].corr(self.hypothesis_two_b['trump_per'])

    

obj = Data()
#obj.build_csv_google_data()
# obj.build_csv_google_data_election()
#obj.test()
obj.get_correlations()




