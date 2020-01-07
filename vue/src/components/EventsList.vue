<template>
    <div class="eventsList">
        <b-table-simple hover small>
            <b-thead>
            <b-tr>
                <b-th>開催日</b-th>
                <b-th>タイトル</b-th>
                <b-th>タグ</b-th>
            </b-tr>
            </b-thead>
            <b-tbody>
            <b-tr
                v-for="event in events"
                :key="event.event_id"
            >
                <b-th class="text-center">{{ dateToString(event.started_at) }}</b-th>
                <b-th class="text-left"><a :href="event.event_url">{{ event.title }}</a></b-th>
                <b-td>{{ event.hash_tag }}</b-td>
            </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
    export default {
        name: 'EventsList',
        props: {
            events:Array
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