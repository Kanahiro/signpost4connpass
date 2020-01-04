<template>
    <div class="eventsList">
        <table striped hover>
            <tr>
                <th>開催日</th>
                <th>タイトル</th>
                <th>タグ</th>
            </tr>
            <tr
                v-for="event in events"
                :key="event.event_id"
            >
                <td>{{ dateToString(event.started_at) }}</td>
                <td><a :href="event.event_url">{{ event.title }}</a></td>
                <td>{{ event.hash_tag }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'EventsList',
        props: {
            events:Array
        },
        data() {
            return {
            }
        },
        created() {
        },
        methods: {
            dateToString: function(dateTime) {
                let date = new Date(dateTime)
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let day = date.getDate()
                let time = date.getTime()
                return String(year) + "/" + String(month) + "/" + String(day)
            }
        }
    }
</script>

<style scoped>
</style>