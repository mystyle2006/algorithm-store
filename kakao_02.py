def solution(n, k, cmd):
    answer = ''
    n_list = [i for i in range(0, n)]
    n_list_copy = n_list.copy()
    z = []
    k_now_index = k # 지금 위치
    n_now = n # 전체 갯수
    for i in cmd:
        i_list = i.split(' ')
        if i_list[0] == 'U':
            k_now_index = k_now_index-int(i_list[1])
            if k_now_index < 1:
                k_now_index = 0
            # print('U : ',k_now_index, 'list : ', n_list)
        elif i_list[0] == 'D':
            k_now_index = k_now_index+int(i_list[1])
            if k_now_index > len(n_list)-1:
                k_now_index = len(n_list)-1
            # print('D : ',k_now_index, 'list : ', n_list)
        elif i_list[0] == 'C':
            z.append(n_list[k_now_index])
            del n_list[k_now_index]
            if k_now_index >= len(n_list)-1:
                k_now_index -= 1
            # print('C : ',k_now_index, 'list : ', n_list)

        elif i_list[0] == 'Z':
            is_now_value = n_list[k_now_index]

            # print('z : index',k_now_index)
            # print('is_now_value',is_now_value)
            z_pop = z.pop()
            n_list.append(z_pop)

            n_list.sort()
            k_now_index = n_list.index(is_now_value)
            # print('n_list',n_list)
            # print('k_now_index',k_now_index)
            # print('Z : ',k_now_index, 'list : ', n_list)


    for i in n_list_copy:
        if i not in n_list:
            answer += 'X'
        else:
            answer += 'O'
    # print('answer', answer)

    return answer

print(solution(8, 2, ["D 2","C","U 3","C","D 4","C","U 2","Z","Z"]))