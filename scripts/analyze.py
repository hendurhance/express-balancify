import pandas as pd
import matplotlib.pyplot as plt

csv_file = 'request_logs.csv'
df = pd.read_csv(csv_file, parse_dates=['Timestamp'])

total_requests = len(df)

failed_requests = df[df['Server Port'] == 'N/A'].shape[0]

requests_per_second = total_requests / (df['Timestamp'].max() - df['Timestamp'].min()).total_seconds()

# Generate a bar chart with the distribution of responses between server ports
server_port_distribution = df['Server Port'].value_counts()
server_port_distribution.plot(kind='bar', rot=0, color='skyblue')
plt.title('Distribution of Requests Between Server Ports')
plt.xlabel('Server Port')
plt.ylabel('Number of Requests')
plt.show()

# Generate a bar chart with the highest amount of requests handled by each server
highest_requests_by_server = df.groupby('Server Port').size().plot(kind='bar', rot=0, color='lightcoral')
plt.title('Highest Amount of Requests Handled by Each Server')
plt.xlabel('Server Port')
plt.ylabel('Number of Requests')
plt.show()

# Generate a pie chart showing the percentage distribution of requests between server ports
server_port_percentage = df['Server Port'].value_counts() / total_requests * 100
server_port_percentage.plot(kind='pie', autopct='%1.1f%%', startangle=90, colors=['gold', 'lightgreen', 'lightcoral', 'lightskyblue', 'lightpink'])
plt.title('Percentage Distribution of Requests Between Server Ports')
plt.axis('equal')
plt.show()
