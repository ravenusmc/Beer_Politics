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

class Data():

    def __init__(self):
        self.election_data = pd.read_csv('./data/election_data.csv')
        self.breweries = pd.read_csv('./data/breweries.csv')

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
        with open("beer_politics.csv", "w") as csv_file:
            csv_writer = writer(csv_file)
            csv_writer.writerow(["state", "breweries", "clinton_per", "trump_per"])
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

                #trump_per = self.election_data[self.election_data['trump'] == state]

                #adding the values to the csv file 
                csv_writer.writerow([state,breweries, clinton_per, trump_per])
                #increasing the count by one
                count += 1 


            # for state in states:
            #     #The sole states variable is a DF that only has data for each state. 
            #     sole_states = self.breweries[self.breweries['state'] == state]
            #     #The count variable is getting the count of how many breweries are in each state. 
            #     count = sole_states['state'].count()
            #     print(count)
            #     input()

    

obj = Data()
obj.get_breweries_by_state()


#state, breweries, Clinton %, trump %  ---> what the CSV will look like


#X-axis will be number of breweries, y axis will be the percentage that voted for Clinton



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
['ALABAMA','ALASKA','ARIZONA','ARKANSAS','CALIFORNIA','COLORADO','CONNECTICUT','DELAWARE',
'FLORIDA','GEORGIA','HAWAII','IDAHO','ILLINOIS','INDIANA','IOWA','KANSAS','KENTUCKY',
'LOUISIANA','MAINE','MARYLAND','MASSACHUSETTS','MICHIGAN','MINNESOTA','MISSISSIPPI',
'MISSOURI','MONTANA','NEBRASKA','NEVADA','NEW HAMPSHIRE','NEW JERSEY',
'NEW MEXICO','NEW YORK','NORTH CAROLINA','NORTH DAKOTA','OHIO','OKLAHOMA',
'OREGON','PENNSYLVANIA','RHODE ISLAND','SOUTH CAROLINA','SOUTH DAKOTA','TENNESSEE',
'TEXAS','UTAH','VERMONT','VIRGINIA','WASHINGTON','WEST VIRGINIA','WISCONSIN',
'WYOMING']

