import { Component } from '@angular/core'
import { PostsService } from '../services/posts.service'

@Component({
	moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
	providers: [ PostsService ]
})
export class UserComponent  {
	name: string
	email: string
	address: address
	hobbies: string[]
	showHobbies: boolean
	posts: Post[]

	constructor(private postsService: PostsService) {
		this.name = 'Sam Smith'
		this.email = 'john@gmail.com'
		this.address = {
			street: '12 Main St',
			city: 'Boston',
			state: 'MA',
		}
		this.hobbies = ['Music', 'Movies', 'Sports']
		this.showHobbies = false

		this.postsService.getPosts().subscribe(posts => {
			this.posts = posts
		})
	}

	toggleHobbies() {
		if(!this.showHobbies)
			this.showHobbies = true
		else
			this.showHobbies = false
	}

	addHobby(hobby: string) {
		this.hobbies.push(hobby)
	}

	deleteHobby(index: number) {
		this.hobbies.splice(index, 1)
	}
}

interface address {
	street: string
	city: string
	state: string
}

interface Post {
	id: number
	title: string
	body: string
}
