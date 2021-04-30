<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1600px">
          <template v-slot:activator="{ on }">
                <v-layout column align-center>
                    <v-table >
                         <td>
                            <th>
                                <v-layout column align-center>
                                    <div class="sra">
                                        <v-btn outlined color="white" dark v-on="on">
                                            <v-img src="https://img.icons8.com/ios/50/000000/standing-man.png"/>
                                        </v-btn>
                                        <br>
                                        <br>
                                        <br>
                                    <v-layout column align-center>
                                        <th>
                                        <span> Manual </span>
                                        </th>
                                    </v-layout>    
                                    </div>
                                </v-layout>
                            </th>
                            <th>
                                <v-layout column align-center>
                                    <div class="sra">
                                        <v-btn outlined color="white" dark v-on="on">
                                            <v-img src="https://img.icons8.com/pastel-glyph/64/000000/define-location.png"/>
                                        </v-btn>
                                        <br>
                                        <br>
                                        <br>
                                    <v-layout column align-center>
                                        <th>
                                        <span> Automate </span>
                                        </th>
                                    </v-layout>    
                                    </div>
                                </v-layout>
                            </th>
                            <th>
                                <v-layout column align-center>
                                    <div class="sra">
                                        <v-btn outlined color="white" dark v-on="on">
                                            <v-img src="https://img.icons8.com/material-rounded/80/000000/source-code.png"/>
                                        </v-btn>
                                        <br>
                                        <br>
                                        <br>
                                    <v-layout column align-center>
                                        <th>
                                        <span> Test Cases </span>
                                        </th>
                                    </v-layout>  
                                    </div>
                                </v-layout>
                            </th>
                            <th>
                                <v-layout column align-center>
                                    <div class="sra">
                                        <v-btn outlined color="white" dark v-on="on">
                                            <v-img src="https://img.icons8.com/dotty/80/000000/suitcase.png"/>
                                        </v-btn>
                                        <br>
                                        <br>
                                        <br>
                                    <v-layout column align-center>
                                        <th>
                                        <span> Test Suites </span>
                                        </th>
                                    </v-layout>    
                                    </div>
                                </v-layout>
                            </th>
                            <th>
                                <v-layout column align-center>
                                    <div class="sra">
                                        <v-btn outlined color="white" dark v-on="on">
                                            <v-img src="https://img.icons8.com/windows/80/000000/news.png"/>
                                        </v-btn>
                                        <br>
                                        <br>
                                        <br>
                                    <v-layout column align-center>
                                        <th>
                                        <span> Test Run </span>
                                        </th>
                                    </v-layout>  
                                    </div>
                                </v-layout>
                            </th>
                        </td>
                    </v-table>
                </v-layout>          
            </template>
          <!--<template v-slot:activator="{ on }">
                <div>
                  <v-btn outlined color="black" dark v-on="on" width="120px" hight="50px">
                     <v-img src="https://img.icons8.com/ios/100/000000/standing-man.png"/>
                  </v-btn>
                  <v-btn outlined color="black" dark v-on="on" width="120px" hight="50px">
                    <v-img src="https://img.icons8.com/pastel-glyph/64/000000/define-location.png"/>
                  </v-btn>
                  <v-btn outlined color="black" dark v-on="on" width="120px" hight="50px">
                    <v-img src="https://img.icons8.com/pastel-glyph/64/000000/source-code--v3.png"/>
                  </v-btn>
                  <v-btn outlined color="black" dark v-on="on" width="120px" hight="50px">
                    <v-img src="https://img.icons8.com/dotty/80/000000/suitcase.png"/>
                  </v-btn>
                  <v-btn outlined color="black" dark v-on="on" width="120px" hight="50px">
                    <v-img src="https://img.icons8.com/ios/100/000000/news.png"/>
                  </v-btn>
                </div>
            </template>-->
            <v-card>
                <v-card-title>
                    <span class="headline"><h6>citibank IN  v4.0#4<v-icon>watch</v-icon> Aug 11,2017 8:38:35 PM</h6></span>
                </v-card-title>
                <v-layout column align-center>
                  <div>
                    <v-btn outlined color="white">
                      <v-text-field class="search" label="Search Device" v-model="search"></v-text-field>
                      <v-icon color="black">search</v-icon>
                    </v-btn>
                  </div><br><br>
                </v-layout>
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg2 v-for="person in team" :key="person.name">
                      <v-card class="text-center ma-3">
                        <v-layout column align-center>
                          <v-card-title>
                              <span class="headline blue--text"><h6>192.168.1.12</h6></span>
                          </v-card-title>
                          <v-responsive class="pt-4">
                            <div class="device">
                              <v-img :src="person.apps"/>
                            </div>
                          </v-responsive>
                          <v-card-text>
                            <div class="subhrading"><h4>{{person.name}}</h4></div><br>
                            <div class="gray--text">
                              <ul>
                                <li>{{person.role}}</li>
                                <li>{{person.role1}}</li>
                                <li>{{person.role2}}</li>
                              </ul>
                            </div>
                          </v-card-text>
                          <v-card-actions>
                            <v-btn outlined color="blue">
                              <span>select</span>
                            </v-btn>
                          </v-card-actions>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darker-1" text outlined @click="dialog = false">Close</v-btn>
                        <v-btn color="green" text outlined @click="dialog = false">Save</v-btn>
                    </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    data: () => ({
        dialog: false,
        title: '',
        content: '',
        team: [
          {role:'v5.1', role1:'4.5 in', role2:'1080x1920', name:'Motorola Moto G Dual', apps:'/3.png'},
          {role:'v4.4.4', role1:'4.5 in', role2:'480x800', name:'Samsung Galaxy Core Prime', apps:'/13.png'},
          {role:'v6.0.1', role1:'5 in', role2:'1080x1920', name:'Nexus 5', apps:'/15.png'},
          {role:'v4.4.4', role1:'4.5 in', role2:'480x854', name:'Sony Xperia E3 Dual', apps:'/14.png'}
        ],
    })
  }
</script>
<style>
.search {
  width: 1480px;
}
.device {
  width: 100px;
  height: 100px;
}

.sra{
  width: 200px; 
  height: 200px;
}
</style>
