  <template>
  <div>
    <v-layout column align-center>
    <div>
      <v-btn outlined color="white">
        <v-text-field class="search" label="Search" v-model="search"></v-text-field>
        <v-icon color="black">search</v-icon>
      </v-btn>
    </div>
    </v-layout>
    <div class="overline text-right ">
      <v-flex class="mt-4 mb-4">
        <Popup/>
      </v-flex>
    </div>
     <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in text" :key="person.name">
              <v-layout column align-center>
                <v-list flat>
                    <v-list-item  v-for="link in links" :key="link.text" router :to="link.route">
                          <v-responsive class="pt-4">
                            <btn>
                              <v-layout column align-center>
                              <div class="icon"><v-img :src="person.apps"></v-img></div>
                              </v-layout>
                            </btn>
                              <v-layout column align-center>
                                  <div class="subhrading"><v-icon color="blue" size="15px">lock</v-icon>{{person.name}}</div>
                                  <div class="gray--text">{{person.role}}</div>
                              </v-layout>
                          </v-responsive>
                    </v-list-item>
                </v-list>
              </v-layout>
          </v-flex> 
      </v-layout>
    </v-container>

    <!--<v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in text" :key="person.name">
          <v-list-item outlined color="white">
            <v-layout column align-center>
              <v-responsive class="pt-4">
                <div class="App">
                  <v-img :src="person.apps"></v-img>
                </div>
              </v-responsive>
            </v-layout>
          </v-list-item>
            <v-card-text>
              <v-layout column align-center>
                <div class="subhrading"><v-icon color="blue" size="15px">lock</v-icon>{{person.name}}</div>
                <div class="gray--text">{{person.role}}</div>
              </v-layout>
            </v-card-text>
            <v-list flat>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                  <v-layout column align-center>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                  </v-layout>
                </v-list-item>
            </v-list>
        </v-flex>
      </v-layout>
    </v-container>-->
  </div>
</template>
<script>
import Popup from '@/components/Popup.vue'
export default {
  data: () => ({
    text: [
      {role:'App', name:'Big Basket', apps:'/1.png'},
      {role:'App', name:'Amazon', apps:'/2.png'},
      {role:'App', name:'Devise only', apps:'/3.png'},
      {role:'App', name:'CitiBank Mobile', apps:'/4.png'},
      {role:'App', name:'Flipkart', apps:'/5.png'},
      {role:'App', name:'Sample Devise', apps:'/3.png'},
      {role:'App', name:'Hike Messanger', apps:'/6.png'},
      {role:'App', name:'FaceBook', apps:'/7.png'},
      {role:'App', name:'A Jio', apps:'/8.png'},
      {role:'App', name:'Sattva', apps:'/9.png'},
      {role:'App', name:'Flipkart', apps:'/5.png'},
      {role:'App', name:'PayTM', apps:'/10.png'}
    ],
    links: [
        {route:'/project_detail' }
      ],
  }),
  components :{
      Popup
    }
  
}
</script>
<style>
.search {
  width: 1680px;
}
.App{
  width: 100px;
  height: 100px;
}
.icon{
  width:75px; 
  height:110px;
}

</style>
