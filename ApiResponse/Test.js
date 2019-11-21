


function Test() {

    this.data;
    this.error;
    this.getReponsePattern = function (data, error) {
        if (data == null) {
            this.data = null;
            this.status = false;
            this.error = error;
            return 0;
        }
        this.data = data;
        this.status = true;
        this.error = null;

        return this;
    }
}
module.exports = Test;
