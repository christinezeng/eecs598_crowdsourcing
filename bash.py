import os
import kaggle

dataset = "superpotato9/dalle-recognition-dataset"

# Define the folder you want to filter (e.g., "PetImages/Cat/")
target_folder = "real"

# Get the list of all files in the dataset
files = kaggle.api.dataset_list_files(dataset, page_size=200).files

# Filter only files inside the target folder
filtered_files = [f.name for f in files if f.name.startswith(target_folder)]
print(filtered_files)

# Select the first 100 files
files_to_download = filtered_files[100:110]

# Create output directory
output_dir = "real_subset"
os.makedirs(output_dir, exist_ok=True)

# Download each file
for file_name in files_to_download:
    try:
        kaggle.api.dataset_download_file(dataset, file_name, path=output_dir)
    except:
        print("file does not exist")