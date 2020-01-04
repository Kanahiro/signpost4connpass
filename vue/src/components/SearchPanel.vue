<template>
    <div class="searchPanel">
        <b-form inline class="inlineForm" 
            @submit.prevent="onSearch"
            >
            <label for="keyword">キーワード：</label>
            <b-form-input type="search" v-model="keyword" placeholder="例：python もくもく会"></b-form-input>
            <label for="pref">開催地：</label>
            <b-form-select
                :value="null"
                :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                id="pref"
                >
                <template v-slot:first>
                    <option :value="null">Choose...</option>
                </template>
            </b-form-select>
            <label for="city">開催地（詳細）：</label>
            <b-form-select
                :value="null"
                :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
                id="city"
                >
                <template v-slot:first>
                    <option :value="null">Choose...</option>
                </template>
            </b-form-select>
        </b-form>
        <b-form inline class="inlineForm" @submit.prevent="exec">
            <label for="startDate">開催日：</label>
            <b-form-input
                type="date"
                id="startDate"
                v-model="startDate">
            </b-form-input>
            <label for="startMonth">開催月：</label>
            <b-form-input
                type="month"
                id="startMonth"
                v-model="startMonth">
            </b-form-input>
            <b-button variant="outline-secondary" @click="onSearch">検索</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'SearchPanel',
        data() {
            return {
                keyword:"",
                startDate:"",
                startMonth:"",
                pref:"",
                city:""
            }
        },
        created() {
        },
        methods: {
            dateToString: function(dateTime, isMonth=false) {
                let date = new Date(dateTime)
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let day = date.getDate()
                
                //年月日を整数から文字列にキャスト
                year = String(year)
                //月日の数値が一桁の場合、十の位に0をセット
                if (month < 10) {
                    month = "0" + String(month)
                }
                if (day < 10) {
                    day = "0" + String(day)
                }
                //dayが不要の場合（月検索）
                if (isMonth) {
                    return year + "-" + month
                }
                return year + "-" + month + "-" + day
            },
            fetchApi: function(queryUrl) {
                fetch("/api/?" + queryUrl)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.$emit("onGetApiData", data)
                })
            },
            makeQueryUrl: function(queryObj) {
                let url = ""
                for ( let key in queryObj ) {
                    if ( queryObj[key] != "" ) {
                        url = url + "&" + key + "=" + queryObj[key] 
                    }
                }
                return url
            },
            validateQueryObj: function(queryObj) {
                for ( let key in queryObj ) {
                    if ( queryObj[key] != "" ) {
                        return true
                    }
                }
                alert("空欄では検索できません。")
                return false
            },
            onSearch: function() {
                let queryObj = {}
                queryObj["keyword_or"] = this.keyword
                queryObj["ymd"] = this.startDate.replace(/-/g, "")
                queryObj["ym"] = this.startMonth.replace(/-/g, "")

                if ( this.pref != "" ) {
                    queryObj["keyword_or"] = queryObj["keyword_or"] + "," + this.pref
                }

                if ( this.city != "" ) {
                    queryObj["keyword_or"] = queryObj["keyword_or"] + "," + this.city
                }

                //クエリが不適切な場合、検索しない
                if (!this.validateQueryObj(queryObj)) { return }

                let queryUrl = this.makeQueryUrl(queryObj)
                console.log(queryUrl)
                this.fetchApi(queryUrl)
            },
        }
    }
</script>

<style scoped>
    .inlineForm {
        margin: 10px 0;
    }
    label {
        margin: 0 10px;
    }
</style>