function ApiResponse(data, error) {
  if (data == null) {
    this.data = null;
    this.status = false;
    this.error = error;
    return 0;
  }
  this.data = data;
  this.status = true;
  this.error = null;
}
module.exports = ApiResponse;
