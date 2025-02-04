import pymongo
import datetime

# connect to your Atlas cluster
client = pymongo.MongoClient('mongodb+srv://cczeng:UazifLBgd2Jc73Vb@cluster0.frlp6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

# get the database and collection on which to run the operation
collection = client['images']['images']

# create new documents
imageDocuments = [
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10084.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/109.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10054.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1049.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10040.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1027.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10064.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10019.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1077.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1086.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1045.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1070.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1064.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/113.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10059.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1063.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/103.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10038.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10004.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10072.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1048.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1075.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10047.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10071.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1029.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1030.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10063.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1005.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10073.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10001.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1037.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1067.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10083.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1056.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10082.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1089.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1046.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1004.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10017.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10013.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/114.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1021.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1020.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10075.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1051.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1088.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1041.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1087.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1060.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10070.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10016.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1068.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10030.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10035.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10028.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/104.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10021.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1047.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10036.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1001.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10088.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10005.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1078.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1065.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1081.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10026.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1010.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10053.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1090.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1028.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10078.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1071.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10045.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1062.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/101.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1002.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/11.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1003.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1082.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1074.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10003.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10034.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1050.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10037.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1034.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1072.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10031.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10079.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1083.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1059.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10011.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10074.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1069.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10014.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10002.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10076.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1022.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10052.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10023.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10057.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/111.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10046.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/106.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1036.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1008.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10032.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1000.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10050.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1006.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/102.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1026.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/110.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10051.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1061.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10018.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10027.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10060.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10007.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1013.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1079.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1058.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/105.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10033.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1012.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10085.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10062.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10039.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1052.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1032.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10041.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1007.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10029.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1053.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/107.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10067.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/10g6ydkna66a1.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10065.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10061.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1016.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10055.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1057.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1014.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1076.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10058.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1080.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10087.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10009.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/112.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1031.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1084.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10015.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1091.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10044.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10049.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1023.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10010.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10056.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1008.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1015.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1044.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10042.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1066.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10025.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1042.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1039.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1024.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10048.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1055.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1035.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1018.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10024.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/1007.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10000.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10006.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1019.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1073.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10068.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1017.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10069.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10066.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1011.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1040.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10020.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1038.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1085.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10081.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10008.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10086.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1043.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1054.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1009.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10022.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/1025.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10043.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10012.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/real_subset/108.jpg",
    "true_label": "Real"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10077.jpg",
    "true_label": "AI"
  },
  {
    "image_url": "https://websites.umich.edu/~chenyanh/Images/AI_subset/10080.jpg",
    "true_label": "AI"
  }
]

# insert documents
collection.insert_many(imageDocuments)

# # find documents
# result = collection.find_one({ "name.last": "Turing" })

# # print results
# print("Document found:\n", result)
