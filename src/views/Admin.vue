<template>
  <div class="container">
    <div class="pt-5">
      <div class="cart">
        <div class="cart-header">
          <div class="row">
            <div class="col-6">
              <h3>All Devices</h3>
            </div>
            <div class="col-6 text-end">
              <button class="btn btn-primary" @click="createDeviceRequest">Create Device</button>
            </div>
          </div>
        </div>
        <div class="cart-body">
          <table class="table striped">

            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(device, index) in deviceList" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ device.name }}</td>
              <td>{{`$ ${device.price}`}}</td>
              <td>{{ device.deviceType }}</td>
              <td>{{ new Date(device.createTime).toLocaleDateString() }}</td>
              <td>
                <button class="btn btn-primary em-1">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
            </tbody>

          </table>
        </div>
      </div>

    </div>
  </div>
  <device-modal ref="deviceModal"/>
</template>

<script>
  import DeviceService from "@/services/device.service";
  import DeviceModal from "@/components/Device";

export default {
  name: "admin",
  components: {DeviceModal},
  data() {
    return {
      deviceList: [],
    };
  },
  mounted() {
    DeviceService.getAllDevices().then(response => {
      this.deviceList = response.data;
    });
  },
  methods: {
    createDeviceRequest() {
      this.$refs['deviceModal'].showDeviceModal();
    }
  }
};
</script>

<style scoped></style>
