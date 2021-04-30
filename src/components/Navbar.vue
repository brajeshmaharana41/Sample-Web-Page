<template>
    <nav>
        <v-app-bar color="black" dark app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase">
                <img src="/11.png" />
            </v-toolbar-title>
            <v-spacer></v-spacer>
                    <v-btn text v-on="on">
                        <span>Courses</span>
                        <v-icon right>expand_more</v-icon>
                    </v-btn>
                    <v-btn text v-on="on">
                        <span>Branches</span>
                        <v-icon right>expand_more</v-icon>
                    </v-btn>
                    <v-btn text v-on="on">
                        <span>Resources</span>
                        <v-icon right>expand_more</v-icon>
                    </v-btn>
                    <v-btn text v-on="on">
                        <span>About</span>
                        <v-icon right>expand_more</v-icon>
                    </v-btn>
            <v-menu offset-y>
                <template v-slot:activator="{on}">
                    <v-btn text v-on="on">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list flat>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                        <v-list-item-action>{{link.text}}</v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn text>
                <span>Exit</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" dark app class="red darken-4">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <v-img src="/12.png"></v-img>
                    </v-avatar>
                </v-flex>
                    <p class="white--text subheading mt-1 text-center">aishwarya@robustest.com</p>
                    <v-flex class="mt-4 mb-4">
                        <Popup/>
                    </v-flex>
            </v-layout>
            <v-list flat>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
import Popup from './Popup.vue'
export default {
    data: () =>({
        drawer: true,
        links: [
            {icon: 'dashboard', text:'Project_list', route:'/' },
            {icon: 'computer', text:'Project_detail', route:'/project_detail' },
            {icon: 'person', text:'Team', route:'/team' },
            ],
        Hello:[    
            {text1:'Courses'},
            {text1:'',},
            {text1:''},
            {text1:'' },
        ]
    }),
    components :{
      Popup
    }
}
</script>
<style>
.border{
    border-left: 4px solid greenyellow;
}
</style>
