<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xl12>
          <v-card class="text-xenter ma-3">
            <v-list-item>
            <v-flex xs12 sm12 md12 lg2>
              <v-card class="text-center ma-3">
                <v-layout column align-center>
                  <v-responsive class="pt-4">
                    <div class="app">
                      <v-img src="/4.png"/>
                    </div>
                  </v-responsive>
                  <v-card-text>
                    <div class="subhrading"><h1>CitiBank</h1></div><br>
                    <div class="gray--text"><h1>Sample App</h1></div><br><br>
                    <div class="overline text-right "><h3><a>Selected Build URl</a></h3></div>
                    <div class="overline text-right "><h3><a>Latest Build URl</a></h3></div>
                  </v-card-text>
                </v-layout>
                </v-card>
              </v-flex>
              <v-list-item-content>
                <div class="overline text-right">
              <v-icon text class="ma-2">group</v-icon>
              <v-icon text class="ma-2">tag</v-icon>
              <v-icon text class="ma-2">cloud</v-icon>
                </div>
                  <v-layout column align-center>
                    <v-list-item-title class="headline mb-1">
                      <table>
                      <tr>
                        <td>Project name</td>
                        <td> : </td>
                        <td><a>com.citiuat</a></td>
                      </tr>
                      <tr>
                        <td>Build Detail</td>
                        <td> : </td>
                        <td><a>Citibank IN v4.0 #4</a></td>
                      </tr>
                      <tr>
                        <td>Build Name</td>
                        <td> : </td>
                        <td>Citibank IN android</td>
                      </tr>
                      <tr>
                        <td>Version Name</td>
                        <td> : </td>
                        <td>4.0</td>
                      </tr>
                      <tr>
                        <td>Version Code</td>
                        <td> : </td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>Uploaded By</td>
                        <td> : </td>
                        <td>Aishwarya Mishra</td>
                      </tr>
                      <tr>
                        <td> Uploaded ON</td>
                        <td> : </td>
                        <td>Aug 11,2017 8:38:35 PM</td>
                      </tr>
                      <tr>
                        <td>Launch Activity</td>
                        <td> : </td>
                        <td><a>com.google.android.dialer</a></td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td> : </td>
                        <td class="blue--text"><u>This is a discription for the curent build</u></td>
                      </tr>
                    </table>
                    </v-list-item-title>
                   </v-layout>
              </v-list-item-content>
            </v-list-item><br><br>
            <v-card-actions>
              <div class="overline">Iyad</div>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-flex class="mt-4 mb-4">
      <device_list/>
    </v-flex>
    </v-container>
  </div>
</template>
<script>
import device_list from '@/views/device_list'
export default {
  components :{
    device_list
  }
}
</script>

<style>
.app {
  width: 200px;
  height: 200px;
}

</style>
