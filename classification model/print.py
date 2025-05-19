import pandas as pd

# Load the CSV file into a DataFrame
df = pd.read_csv('C:/Users/vvtej/Downloads/YogaIntelliJ-main/classification model/test_data.csv')

# Print the first 5 rows (head)
print("Head of the CSV file:")
print(df.head())

# Print the last 5 rows (tail)
print("\nBottom of the CSV file:")
print(df.tail())
