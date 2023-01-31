<template>
	<div class="pageBody">
		<h1>ERROR</h1>
		<h3>{{ 'code: ' + $nuxt.error.statusCode }}</h3>
		<p>{{ 'message: ' + $nuxt.error.message }}</p>
	</div>
</template>