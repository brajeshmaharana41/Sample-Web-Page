<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="800px">
            <template v-slot:activator="{ on }">
                <v-btn outlined color="teal lighten-3" dark v-on="on"> create project</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline"> Project information</span>
                </v-card-title>
                <v-form class="px-3" ref="form">
                    <v-card-text>
                        <v-text-field label="package Name" v-model="Project" prepend-icon="folder" :rules="inputRules"></v-text-field>
                        <v-text-field label="Build Details" v-model="Project" prepend-icon="edit" :rules="inputRules"></v-text-field>
                        <v-text-field label="Build Name" v-model="Project" prepend-icon="edit" :rules="inputRules"></v-text-field>
                        <v-text-field label="Version Name" v-model="Project" prepend-icon="edit" :rules="inputRules"></v-text-field>
                        <v-text-field label="Version Code" v-model="Project" prepend-icon="edit" :rules="inputRules"></v-text-field>
                        <v-text-field label="Launch Activity" v-model="Project" prepend-icon="edit" :rules="inputRules"></v-text-field>
                        <v-textarea label="Description" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>
                        <v-text-field label="Uploaded By" v-model="Project" prepend-icon="edit" :rules="inputRules"></v-text-field>
                        <v-col>
                            <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" translate="scale-transition" offset-y max-width="290px" min-width="290px">
                                <template v-slot:activator="{ on }">
                                    <v-text-field v-model="dateFormatted" lable="Uploaded ON" hint="DD/MM/YYYY format" prepend-icon="event" @blur="date = parsDate(dateFormatted)" v-on="{ on }">
                                    </v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title @input="menu1=false">
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darker-1" text outlined @click="dialog = false">Close</v-btn>
                        <v-btn color="green" text outlined @click="dialog = false">Save</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    data: vm => ({
        dialog: false,
        title: '',
        content: '',
        date: new Date().toDateString().substr(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        menu1: false,
        inputRules: [
          v => v.length >=3 || 'Minimum length is 3 characters'
        ]
    }),
    methods: {
        formatDate (date) {
            if(!date)  return null
            const [year, month, day] = date.split('-')
            return `${year}/${month}/${day}`
        },
        parseDate (date) {
            if(!date)  return null
            const [year, month, day] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
    },
    computed: {
        computedDateFormatted (){
            return this.formateDate(this.date)
        }
    },
    watch:{
        date(){
            this.dateFormatted = this.formatDate(this.date)
        }
    }
}
</script>
