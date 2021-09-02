<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-row no-gutters>
          <v-col cols="2">
            <v-text-field
              label="대분류 이름"
              :rules="rules"
              hide-details="auto"
              hint="대분류 이름 예시) 음료, 주류 등"
            />
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <!--   추가 버튼    -->
        <v-row>
          <v-col xl="12">
            <v-spacer />
            <div class="add-btn">
              <v-btn
                outlined
                color="indigo"
              >
                추가
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <!--  생성되어야할 소분류 영역      -->
        <v-row justify="start">
          <v-col xl="1">
            <!-- 체크박스 Vuetify Model in array 스크립트 작업 요망.-->
            <v-checkbox />
          </v-col>
          <v-col xl="3">
            <v-text-field
              outlined
              placeholder="소분류 이름"
            />
          </v-col>
          <v-col xl="3">
            <v-text-field
              outlined
              placeholder="가격"
            />
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            color="secondary"
          >
            취소
          </v-btn>
          <v-btn
            text
            color="primary"
          >
            저장
          </v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

  <script>
    export default {
      data: () => ({
        rules: [
          value => !!value || '대분류를 입력하세요.',
          value => (value && value.length >= 2) || '최소 2자 이상 입력하세요.',
        ],
      }),
    }
  </script>
<style>
  .add-btn{
    display: flex;
    justify-content: flex-end;
  }
</style>

