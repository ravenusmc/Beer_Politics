import pandas as pd

target = 'Alabama'


election_data = pd.read_csv('./data/election_data.csv')

#print(election_data.head())

small_df = election_data.iloc[0]

print(small_df.iloc[2])

#print(election_data[election_data['trump']])