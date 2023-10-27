modules.exports = {
  branches: [
    "main",
    {
      name: "develop",
      channel: "alpha",
      prerelease: true
    }
  ],
  plugins:
    [
      [
        "@semantic-release/commit-analyzer",
        { preset: "conventionalcommits" }
      ],
      [
        "@semantic-release/release-notes-generator",
        { preset: "conventionalcommits" }
      ],
      [
        "@semantic-release/github", {
          assets: [
            { path: "./publish/*" }
          ]
        }
      ]
    ]
}
