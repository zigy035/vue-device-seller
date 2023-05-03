<template>
  <div class="modal fade" id="deviceModal" tabIndex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h5 class="modal-title">Device details</h5>
            <button class="btn-close" type="button" data-btn-dismiss="modal"></button>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-btn-dismiss="modal">Close</button>
            <button class="btn btn-primary" type="submit" @click="submitted = true">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Device from "@/models/device";
import DeviceType from "@/models/device-type";
import DeviceService from "@/services/device.service";

export default {
  name: 'device-modal',
  data() {
    return {
      device: new Device(),
      errorMessage: '',
      submitted: false,
      deviceTypes: [ DeviceType.DESKTOP, DeviceType.LAPTOP, DeviceType.TABLET, DeviceType.PHONE ],
    };
  },
  methods: {
    saveDevice() {
      DeviceService.saveDevice(this.device).then(response => {
        console.log(response.data);
      }).catch((err) => {
        this.errorMessage = 'Unexpected error occurred.';
        console.log(err);
      })
    },
    showDeviceModal() {
      $('#deviceModal').modal('show');
    }
  },
}
</script>

<style scoped>

</style>