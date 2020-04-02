<template>
    <div class="add-page">
        <van-uploader
            :after-read="afterRead"
            max-count="1"
            v-model="fileList"
        />
        <van-cell-group>
            <van-field
                label="标题"
                placeholder="文章标题"
                v-model="form.title"
            />
            <van-field
                label="简介"
                placeholder="文章简介"
                v-model="form.summary"
            />
            <van-field
                label="内容"
                placeholder="文章内容"
                v-model="form.content"
                autosize
                type="textarea"
            />
        </van-cell-group>
        <van-button
            type="primary"
            @click="handleAdd"
            class="add-button"
        >
            提交
        </van-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [],
            form: {
                title: "",
                summary: "",
                content: "",
                img: ""
            }
        };
    },
    methods: {
        afterRead({ content }) {
            this.form.img = content;
        },
        handleAdd() {
            fetch("/article/create", {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(this.form)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.status === 200) {
                        this.$toast.success("文章发布成功");
                        this.$router.push({ path: "/" });
                    } else {
                        this.$toast.fail(res.errMsg);
                    }
                });
        }
    }
};
</script>

<style scoped>
.add-page {
    padding-top: 20px;
}
.add-button {
    position: absolute;
    left: 0;
    bottom: 80px;
    width: 100%;
}
</style>