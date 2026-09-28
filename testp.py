import boto3
from botocore.client import Config

configs = {
    "user_id": "pgs-user",
    "display_name": "Search App",
    "email": "",
    "suspended": 0,
    "max_buckets": 1000,
    "subusers": [],
    "keys": [
        {
            "user": "pgs-user",
            "access_key": "9NFNS57O6FBWWLYAR8CC",
            "secret_key": "uyo75XqKCSbEWwroQGnaDAmQM9qdOvnpkhSJbW7u",
            "active": True,
            "create_date": "2026-09-25T02:36:35.164447Z"
        }
    ],
    "swift_keys": [],
    "caps": [],
    "op_mask": "read, write, delete",
    "default_placement": "",
    "default_storage_class": "",
    "placement_tags": [],
    "bucket_quota": {
        "enabled": False,
        "check_on_raw": False,
        "max_size": -1,
        "max_size_kb": 0,
        "max_objects": -1
    },
    "user_quota": {
        "enabled": False,
        "check_on_raw": False,
        "max_size": -1,
        "max_size_kb": 0,
        "max_objects": -1
    },
    "temp_url_keys": [],
    "type": "rgw",
    "mfa_ids": [],
    "account_id": "",
    "path": "/",
    "create_date": "2026-09-25T02:36:35.164204Z",
    "tags": [],
    "group_ids": []
}
# RGW Details
## Configuration
ENDPOINT_URL = "https://saugatparajuli.com.np:7480"  # Replace with Proxmox RGW IP & Port
ACCESS_KEY = "9NFNS57O6FBWWLYAR8CC"
SECRET_KEY = "uyo75XqKCSbEWwroQGnaDAmQM9qdOvnpkhSJbW7u"

# Initialize S3 client connected to Ceph RGW
s3_client = boto3.client(
    "s3",
    endpoint_url=ENDPOINT_URL,
    aws_access_key_id="9NFNS57O6FBWWLYAR8CC",
    aws_secret_access_key="uyo75XqKCSbEWwroQGnaDAmQM9qdOvnpkhSJbW7u",
    config=Config(s3={"addressing_style": "path"}),  # Use path-style access for Ceph RGW
)

bucket_name = "my-test-bucket"
file_path = "spec.md"
object_name = "uploads/spec.md"

# 1. Create Bucket (if it doesn't exist)
try:
    s3_client.create_bucket(Bucket=bucket_name)
    print(f"Bucket '{bucket_name}' ready.")
except Exception as e:
    print(f"Bucket note: {e}")

# 2. Upload File
s3_client.upload_file(file_path, bucket_name, object_name)
print(f"Uploaded '{file_path}' to '{bucket_name}/{object_name}'.")